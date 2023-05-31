using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SeminarskiTest.Data;
using SeminarskiTest.Helper;
using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]

    public class EvidencijaZaposlenikaController : ControllerBase
    {
        private IEvidencijaZaposlenikaRepository _repository;
        private readonly AppDbContext _db;

        public EvidencijaZaposlenikaController(IEvidencijaZaposlenikaRepository repository, AppDbContext db)
        {
            _repository = repository;
            _db = db;
        }


        
        [HttpGet]
        public ActionResult<EvidencijaZaposlenikaVModel> GetAll()
        {
            var novi = new EvidencijaZaposlenikaVModel()
            {
                korisnici = _db.Korisnik.Select(x => new Korisnik()
                {
                    Id = x.Id,
                    Ime = x.Ime,
                    Prezime = x.Prezime,
                    DatumRodjenja = x.DatumRodjenja,
                    Grad = x.Grad,
                    BrojTelefona = x.BrojTelefona,
                    Adresa = x.Adresa,
                    Lozinka = x.Lozinka,
                    Email = x.Email,
                    DrzavaId = x.DrzavaId,
                    SpolId = x.SpolId
                }).ToList(),
                evidencije = _db.EvidencijaZaposlenika.Include(x => x.Korisnik).ToList()
            };

            return Ok(novi);
        }


        [HttpGet]
        public ActionResult GetKorisnike()
        {
            var korisnik = _db.Korisnik.Select(x => new Korisnik()
            {
                Id = x.Id,
                Ime = x.Ime,
                Prezime = x.Prezime,
                DatumRodjenja = x.DatumRodjenja,
                Grad = x.Grad,
                BrojTelefona = x.BrojTelefona,
                Adresa = x.Adresa,
                Lozinka = x.Lozinka,
                Email = x.Email,
                DrzavaId = x.DrzavaId,
                SpolId = x.SpolId
            }).ToList();

            return Ok(korisnik);
        }


        public class DodajEvidencijuVModel
        {
            public bool aktivan { get; set; }
            public DateTime datumPrijave { get; set; }
            public DateTime datumOdjave { get; set; }
            public string? korisnikid { get; set; }
            public string korisnikime { get; set; }
        }


        [HttpPost]
        public ActionResult Dodaj(DodajEvidencijuVModel x)
        {
            var nova = new EvidencijaZaposlenika();
            _db.Add(nova);

            nova.Aktivan = x.aktivan;
            nova.DatumPrijave = x.datumPrijave;
            nova.DatumOdjave = x.datumOdjave;
            nova.KorisnikId = x.korisnikid;
            nova.KorisnikIme = x.korisnikime;

            _db.SaveChanges();

            return Ok(nova);
        }

        //[HttpGet]
        //public IEnumerable<EvidencijaZaposlenika> Get(string? imeprezime)
        //{
        //    return this._repository.Get(null);
        //}

        [Route("GetPaged")]
        [HttpGet]
        public PagedList<EvidencijaZaposlenika> Get([FromQuery] BaseSearchObject search)
        {
            var entity = this._repository.GetPaged(search);

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

        //[HttpPost]
        //public void Add(EvidencijaZaposlenikaVModel x)
        //{
        //    this._repository.Add(x);

        //}


        //[HttpPatch("{id}")]
        //public void Update(int id, EvidencijaZaposlenikaVModel x)
        //{
        //    this._repository.Update(id, x);
        //}

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            this._repository.Delete(id);
        }
    }
}
