using Microsoft.AspNetCore.Authorization;
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
    public class ProdavnicaController : ControllerBase
    {
        private IProdavnicaRepository repository;

        public ProdavnicaController(IProdavnicaRepository _repository)
        {
            repository = _repository;
        }

        [HttpGet]
        public IEnumerable<Prodavnica> Get([FromQuery] ProdavnicaSearchObject search, int test)
        {
            return this.repository.Get(search);
        }

        [Route("GetPaged")]
        [HttpGet]
        public PagedList<Prodavnica> Get([FromQuery] ProdavnicaSearchObject search)
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
        
        public async void Add([FromBody] ProdavnicaVModel x)
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
        public void Update(int id, [FromBody] ProdavnicaVModel x)
        {
            this.repository.Update(id, x);
        }

        [HttpDelete("{id}")]
        public async void Delete(int id)
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
