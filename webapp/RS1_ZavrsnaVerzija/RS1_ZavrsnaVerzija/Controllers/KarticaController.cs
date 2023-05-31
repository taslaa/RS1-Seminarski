using Microsoft.AspNetCore.Mvc;
using SeminarskiTest.Models;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KarticaController : ControllerBase
    {
        private IKarticaRepository repository;

        public KarticaController(IKarticaRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet]
        public IEnumerable<Kartica> Get()
        {
            return this.repository.Get(null);
        }

        [HttpPost]
        public void Add(KarticaVModel x)
        {
            this.repository.Add(x);
        }

        [HttpPatch("{id}")]
        public void Update(int id, KarticaVModel x)
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
