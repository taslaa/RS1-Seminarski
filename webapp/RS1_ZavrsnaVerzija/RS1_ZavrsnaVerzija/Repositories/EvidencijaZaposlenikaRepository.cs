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
    public class EvidencijaZaposlenikaRepository : GenericRepository<EvidencijaZaposlenika, EvidencijaZaposlenikaVModel, BaseSearchObject>, IEvidencijaZaposlenikaRepository
    {
        private readonly AppDbContext _db;


        public EvidencijaZaposlenikaRepository(AppDbContext db, IMapper mapper) : base(mapper, db)
        {
            _db = db;
        }

        public override IQueryable<EvidencijaZaposlenika> AddInclude(IQueryable<EvidencijaZaposlenika> query)
        {
            query = query.Include(x => x.Korisnik);

            return query;
        }

        public override PagedList<EvidencijaZaposlenika> GetPaged(IQueryable<EvidencijaZaposlenika> entity, BaseSearchObject search)
        {
            return PagedList<EvidencijaZaposlenika>.ToPagedList(entity, search.PageNumber, search.PageSize);
        }
    }
}
