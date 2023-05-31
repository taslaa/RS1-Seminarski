using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NuGet.Common;
using SeminarskiTest.Helper;
using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KorisnikController : ControllerBase
    {
        private IKorisnikRepository repository;
        private readonly UserManager<Korisnik> _userManager;
        private readonly SignInManager<Korisnik> signInManager;
        private readonly ILogger<KorisnikController> _logger;
        private readonly IMapper _mapper;
        private readonly IAuthManager _authManager;

        public KorisnikController(UserManager<Korisnik> userManager, ILogger<KorisnikController> logger, IMapper mapper, IKorisnikRepository _repository ,IAuthManager authManager)
        {
            _userManager = userManager;
            _logger = logger;
            _mapper = mapper;
            repository = _repository;
            _authManager = authManager;
        }

        [HttpPost]
        [Route("registration")]
        public async Task<IActionResult> Register(KorisnikVModel korisnik)
        {
            _logger.LogInformation($"Registration attempt for {korisnik.Email}) ");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var user = _mapper.Map<Korisnik>(korisnik);
                user.UserName = korisnik.Email;
                user.NormalizedEmail = user.Email.ToUpper();
                user.NormalizedUserName = user.UserName.ToUpper();

                var result = await _userManager.CreateAsync(user, korisnik.Lozinka);

                if (!result.Succeeded)
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(error.Code, error.Description);
                    }
                    return BadRequest(ModelState);
                }


                List<string> uloga = new List<string>();
                uloga.Add("Admin");
                await _userManager.AddToRolesAsync(user, uloga);

                return Accepted();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something went wrong in the {nameof(Register)}");
                return Problem($"Something went wrong in the {nameof(Register)}", statusCode: 500);
            }
        }




        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginKorisnikVModel loginKorisnik)
        {
            _logger.LogInformation($"Login Attempt for {loginKorisnik.Email} ");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                if (!await _authManager.ValidateUser(loginKorisnik))
                {
                    return Unauthorized();
                }

                var user = await _userManager.FindByNameAsync(loginKorisnik.Email);
                var token = await _authManager.CreateToken();
                var refreshToken = await _authManager.CreateRefreshToken();

                await _userManager.SetAuthenticationTokenAsync(user, "SeminarskiTest", "access_token", token);
                    
                return Accepted(new TokenRequest { Token = await _authManager.CreateToken(), IsAuthSuccessful = true, RefreshToken = await _authManager.CreateRefreshToken() });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Something Went Wrong in the {nameof(Login)}");
                return Problem($"Something Went Wrong in the {nameof(Login)}", statusCode: 500);
            }
        }


        [HttpPost]
        [Route("dodajZaposlenika")]
        public async Task<IActionResult> DodajZaposlenika(KorisnikVModel korisnik)
        {
            //_logger.LogInformation($"Registration attempt for {korisnik.Email}) ");
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}


            var user = _mapper.Map<Korisnik>(korisnik);
            user.UserName = korisnik.Email;
            user.NormalizedEmail = user.Email.ToUpper();
            user.NormalizedUserName = user.UserName.ToUpper();

            var result = await _userManager.CreateAsync(user, korisnik.Lozinka);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                return BadRequest(ModelState);
            }

            List<string> uloga = new List<string>();
            uloga.Add("Zaposlenik");
            await _userManager.AddToRolesAsync(user, uloga);

            return Accepted();

        }

        [HttpGet]
        public IEnumerable<Korisnik> Get(string? imeprezime)
        {
            return this.repository.Get(null);
        }

        [Route("GetPaged")]
        [HttpGet]
        public PagedList<Korisnik> Get([FromQuery] BaseSearchObject search)
        {
            var entity = this.repository.GetPaged(search);

            var metaData = new
            {
                entity.TotalCount,
                entity.PageSize,
                entity.CurrentPage,
                entity.HasNext,
                entity.HasPrevious
            };

            Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metaData));

            return entity;
        }

        [HttpPost]
        public async void Add(KorisnikVModel x)
        {
            this.repository.Add(x);
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://localhost:7025/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage msg = await client.GetAsync("api/chart");
            }
        }


        [HttpPatch("{id}")]
        public void Update(int id, KorisnikVModel x)
        {
            this.repository.Update(id, x);
        }

        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //    this.repository.Delete(id);
        //}

        [HttpDelete("{id}")]
        public async void Delete(string id)
        {
            this.repository.Delete(id);
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://localhost:7025/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage msg = await client.GetAsync("api/chart");
            }
        }
    } 
}

