using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SeminarskiTest.Data;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NarudzbaController : ControllerBase
    {
        private readonly AppDbContext _db;
        INarudzbaRepository _repository;

        public NarudzbaController(AppDbContext db, INarudzbaRepository repository)
        {
            _db = db;
            _repository = repository;
        }

        [HttpGet]
        public List<NarudzbaVModel> Get()
        {
            return this._repository.GetNarudzba();
        }

        [HttpPost]
        public NarudzbaVModel Add([FromBody] NarudzbaInsertRequest x)
        {
            return this._repository.Insert(x);
        }
    }
}
