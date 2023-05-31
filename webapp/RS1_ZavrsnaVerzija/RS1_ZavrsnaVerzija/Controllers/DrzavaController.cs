using Microsoft.AspNetCore.Mvc;
using SeminarskiTest.Models;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DrzavaController : ControllerBase
    {
        private IDrzavaRepository repository;

        public DrzavaController(IDrzavaRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet]
        public IEnumerable<Drzava> Get()
        {
            return this.repository.Get(null);
        }

        [HttpPost]
        public void Add(DrzavaVModel x)
        {
            this.repository.Add(x);
        }

        [HttpPatch("{id}")]
        public void Update(int id, DrzavaVModel x)
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
