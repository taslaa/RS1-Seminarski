using AutoMapper;
using Azure.Core;
using IdentityModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Extensions;
using SeminarskiTest.Data;
using SeminarskiTest.Models;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services
{
    public class NarudzbaRepository : GenericRepository<Narudzba, NarudzbaInsertRequest, object>, INarudzbaRepository
    {
        private readonly AppDbContext _db;
        IMapper _mapper;

        public NarudzbaRepository(AppDbContext db, IMapper mapper) : base (mapper, db)
        {
            _db = db;
            _mapper = mapper;
        }

        public NarudzbaVModel Insert(NarudzbaInsertRequest request)
        {
            var narudzba = new Narudzba();
            narudzba.KorisnikID = request.KorisnikId;
            narudzba.DatumNarudzbe = DateTime.Now;
            narudzba.BrojNarudzbe = Guid.NewGuid().ToString();
            _db.Add(narudzba);
            _db.SaveChanges();

            foreach (var proizvod in request.ListaProizvoda)
            {
                NarudzbaStavka Proizvod = new NarudzbaStavka();

                Proizvod.ProizvodID = proizvod.ProizvodId;
                Proizvod.Kolicina = proizvod.Kolicina;
                Proizvod.NarudzbaID = narudzba.NarudzbaID;

                _db.Add(Proizvod);
            }


            _db.SaveChanges();

            return _mapper.Map<NarudzbaVModel>(narudzba);

        }


        public List<NarudzbaVModel> GetNarudzba()
        {
            var entity = _db.Narudzba.AsQueryable();

            entity = entity.Include(x => x.Korisnik).Include(x => x.NarudzbaStavka).ThenInclude(x=> x.Proizvod);

            return _mapper.Map<List<NarudzbaVModel>>(entity);
        }
    }
}
