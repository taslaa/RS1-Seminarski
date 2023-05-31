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
    public class DostavljacRepository : GenericRepository<Dostavljac, DostavljacVModel, BaseSearchObject>, IDostavljacRepository
    {
        private readonly AppDbContext _db;
        public DostavljacRepository(AppDbContext db, IMapper mapper) : base(mapper, db)
        {
            _db = db;
        }

        public override IQueryable<Dostavljac> AddInclude(IQueryable<Dostavljac> query)
        {
            query = query.Include(d => d.Drzava);

            return query;
        }
        public override PagedList<Dostavljac> GetPaged(IQueryable<Dostavljac> entity, BaseSearchObject search)
        {
            return PagedList<Dostavljac>.ToPagedList(entity, search.PageNumber, search.PageSize);
        }

    }
}
