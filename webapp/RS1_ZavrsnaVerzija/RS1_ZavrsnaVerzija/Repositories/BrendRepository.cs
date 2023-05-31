using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SeminarskiTest.Data;
using SeminarskiTest.Models;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services
{
    public class BrendRepository : GenericRepository<Brend, BrendVModel, object>, IBrendRepository
    {
        private readonly AppDbContext _db;
        public BrendRepository(AppDbContext db, IMapper mapper) : base(mapper, db)
        {
            _db = db;
        }

        public override IQueryable<Brend> AddInclude(IQueryable<Brend> query)
        {
            query = query.Include(v => v.Drzava);

            return query;
        }
    }
}
