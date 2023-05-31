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
    public class DobavljacRepository : GenericRepository<Dobavljac, DobavljacVModel, BaseSearchObject>, IDobavljacRepository
    {
        private readonly AppDbContext _db;
        public DobavljacRepository(AppDbContext db, IMapper mapper) : base(mapper, db)
        {
            _db = db;
        }

        public override PagedList<Dobavljac> GetPaged(IQueryable<Dobavljac> entity, BaseSearchObject search)
        {
            return PagedList<Dobavljac>.ToPagedList(entity, search.PageNumber, search.PageSize);
        }

        public override IQueryable<Dobavljac> AddInclude(IQueryable<Dobavljac> query)
        {
            query = query.Include(d => d.Drzava);

            return query;
        }
    }
}
