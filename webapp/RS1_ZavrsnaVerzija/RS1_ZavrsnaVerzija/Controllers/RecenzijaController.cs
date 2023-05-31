using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeminarskiTest.Data;
using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class RecenzijaController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private IRecenzijaRepository _repository;


        public RecenzijaController(AppDbContext dbContext, IRecenzijaRepository repository)
        {
            _dbContext = dbContext;
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Recenzija> GetAll()
        {
            var recenzija = _dbContext.Recenzija.ToList();

            return recenzija;
        }


        [HttpGet("{id}")]
        public ActionResult<RecenzijaVM> GetRecenzije(int id)
        {
            var proizvod = _dbContext.Proizvod.Find(id);

            if (proizvod == null)
                return BadRequest("Proizvod ne postoji!");

            var recenzija = new RecenzijaVM()
            {
                id = proizvod.Id,
                nazivProizvoda = proizvod.NazivProizvoda,
                korisnici = _dbContext.Korisnik.Select(x => new Korisnik()
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
                recenzije = _dbContext.Recenzija.Include(x => x.proizvod).Where(x => x.proizvod.Id == proizvod.Id)
                                                .Include(x=> x.korisnik)
                                                .ToList()
            };

            return Ok(recenzija);
        }

        [HttpGet]
        public ActionResult GetKorisnike()
        {
            var korisnik = _dbContext.Korisnik.Select(x => new Korisnik()
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


        [HttpPost("{id}")]
        public ActionResult Recenziraj(int id, DodajRecenzijuVM x)
        {
            var proizvod = _dbContext.Proizvod.Find(id);

            if (proizvod == null)
                return BadRequest("Proizvod ne postoji!");

            var nova = new Recenzija();
            _dbContext.Add(nova);

            nova.opis = x.opis;
            nova.ocjena = x.ocjena;
            nova.proizvodId = proizvod.Id;
            nova.korisnikId = x.korisnikid;
            nova.korisnikIme = x.korisnikime;

            _dbContext.SaveChanges();

            return Ok(nova);
        }
    }
}
