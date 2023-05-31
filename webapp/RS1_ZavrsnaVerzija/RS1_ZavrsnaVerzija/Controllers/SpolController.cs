using Microsoft.AspNetCore.Mvc;
using SeminarskiTest.Models;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpolController : ControllerBase
    {
        private ISpolRepository repository;

        public SpolController(ISpolRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet]
        public IEnumerable<Spol> Get()
        {
            return this.repository.Get(null);
        }

        [HttpPost]
        public void Add(SpolVModel x)
        {
            this.repository.Add(x);
        }

        [HttpPatch("{id}")]
        public void Update(int id, SpolVModel x)
        {
            this.repository.Update(id, x);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            this.repository.Delete(id);
        }
    }
}
