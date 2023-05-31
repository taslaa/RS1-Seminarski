using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SeminarskiTest.Helper;
using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KategorijaController : ControllerBase
    {
        private IKategorijaRepository repository;

        public KategorijaController(IKategorijaRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet]
        public IEnumerable<Kategorija> Get()
        {
            return this.repository.Get(null);
        }

        [Route("GetPaged")]
        [HttpGet]
        public PagedList<Kategorija> Get([FromQuery] BaseSearchObject search)
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
        public void Add(KategorijaVModel x)
        {
            this.repository.Add(x);
        }

        [HttpPatch("{id}")]
        public void Update(int id, KategorijaVModel x)
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
