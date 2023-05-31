using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using SeminarskiTest.Helper;
using SeminarskiTest.Models;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.ViewModels;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SeminarskiTest.Services
{
    public class AuthManager : IAuthManager
    {
        private readonly UserManager<Korisnik> _userManager;
        private readonly IConfiguration _configuration;
        private Korisnik _user;
        public AuthManager(UserManager<Korisnik> userManager,
            IConfiguration configuration)
        {
            _userManager = userManager;
            _configuration = configuration;
        }

        public async Task<string> CreateToken()
        {
            var signingCredentials = GetSigningCredentials();
            var claims = await GetClaims();
            var token = GenerateTokenOptions(signingCredentials, claims);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
        {
            var jwtSettings = _configuration.GetSection("Jwt");
            var expiration = DateTime.Now.AddMinutes(Convert.ToDouble(
                jwtSettings.GetSection("lifetime").Value));

            var token = new JwtSecurityToken(
                issuer: jwtSettings.GetSection("Issuer").Value,
                claims: claims,
                expires: expiration,
                signingCredentials: signingCredentials
                );

            return token;
        }

        private async Task<List<Claim>> GetClaims()
        {
            var claims = new List<Claim>
             {
                 new Claim(ClaimTypes.Name, _user.UserName),
                 new Claim(ClaimTypes.GivenName, _user.Ime),
                 new Claim(ClaimTypes.NameIdentifier, _user.Id)
             };



            var roles = await _userManager.GetRolesAsync(_user);

            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            return claims;
        }

        public SigningCredentials GetSigningCredentials()
        {
            var key = Environment.GetEnvironmentVariable("KEY");
            var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key.ToString()));

            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256.ToString());
        }

        public async Task<bool> ValidateUser(LoginKorisnikVModel loginKorisnik)
        {
            _user = await _userManager.FindByNameAsync(loginKorisnik.Email);
            var validPassword = await _userManager.CheckPasswordAsync(_user, loginKorisnik.Lozinka);
            return (_user != null && validPassword);
        }

        public async Task<string> CreateRefreshToken()
        {
            await _userManager.RemoveAuthenticationTokenAsync(_user, TokenOptions.DefaultProvider, "RefreshToken");
            var newRefreshToken = await _userManager.GenerateUserTokenAsync(_user, TokenOptions.DefaultProvider, "RefreshToken");
            var result = await _userManager.SetAuthenticationTokenAsync(_user, TokenOptions.DefaultProvider, "RefreshToken", newRefreshToken);
            return newRefreshToken;
        }

        public async Task<TokenRequest> VerifyRefreshToken(TokenRequest request)
        {
            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var tokenContent = jwtSecurityTokenHandler.ReadJwtToken(request.Token);
            var username = tokenContent.Claims.ToList().FirstOrDefault(q => q.Type == ClaimTypes.Name)?.Value;
            _user = await _userManager.FindByNameAsync(username);
            try
            {
                var isValid = await _userManager.VerifyUserTokenAsync(_user, TokenOptions.DefaultProvider, "RefreshToken", request.RefreshToken);
                if (isValid)
                {
                    return new TokenRequest { Token = await CreateToken(), IsAuthSuccessful = true, RefreshToken = await CreateRefreshToken() };
                }
                await _userManager.UpdateSecurityStampAsync(_user);
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return null;
        }
    }
}
