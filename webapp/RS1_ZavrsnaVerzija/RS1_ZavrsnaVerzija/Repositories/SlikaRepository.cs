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
    public class SlikaRepository : GenericRepository<Slika, SlikaVModel, BaseSearchObject> , ISlikaRepository
    {
        private readonly AppDbContext _db;

        public SlikaRepository(AppDbContext db, IMapper mapper ) : base(mapper,db)
        {
            _db = db;   
        }

        public override IQueryable<Slika> AddInclude(IQueryable<Slika> query)
        {
            query = query.Include(p => p.Prodavnica);

            return query;
        }

        public override PagedList<Slika> GetPaged(IQueryable<Slika> entity, BaseSearchObject search)
        {
            return PagedList<Slika>.ToPagedList(entity, search.PageNumber, search.PageSize);
        }
    }
}
