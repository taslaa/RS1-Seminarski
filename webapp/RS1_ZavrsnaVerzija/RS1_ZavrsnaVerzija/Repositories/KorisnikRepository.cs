using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SeminarskiTest.Data;
using SeminarskiTest.Helper;
using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services
{
    public class KorisnikRepository : GenericRepository<Korisnik, KorisnikVModel, BaseSearchObject>, IKorisnikRepository
    {
        private readonly AppDbContext _db;


        public KorisnikRepository(AppDbContext db, IMapper mapper) : base(mapper, db)
        {
            _db = db;
        }

        public override IQueryable<Korisnik> AddInclude(IQueryable<Korisnik> query)
        {
            query = query.Include(x => x.Drzava).Include(x => x.Spol);

            return query;
        }

        public override PagedList<Korisnik> GetPaged(IQueryable<Korisnik> entity, BaseSearchObject search)
        {
            return PagedList<Korisnik>.ToPagedList(entity, search.PageNumber, search.PageSize);
        }
    }
}
