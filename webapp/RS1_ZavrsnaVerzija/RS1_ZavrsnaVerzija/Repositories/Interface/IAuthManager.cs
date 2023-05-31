using Microsoft.AspNetCore.Identity;
using SeminarskiTest.Helper;
using SeminarskiTest.Models;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services.Interfaces
{
    public interface IAuthManager
    {
        Task<bool> ValidateUser(LoginKorisnikVModel loginKorisnik);
        Task<string> CreateToken();
        Task<string> CreateRefreshToken();
        Task<TokenRequest> VerifyRefreshToken(TokenRequest request);
    }
}
