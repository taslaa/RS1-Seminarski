using AutoMapper;
using SeminarskiTest.Data;
using SeminarskiTest.Models;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services
{
    public class KarticaRepository : GenericRepository<Kartica, KarticaVModel, object>, IKarticaRepository
    {
        private readonly AppDbContext db;

        public KarticaRepository(AppDbContext _db, IMapper mapper) : base(mapper, _db)
        {
            db = _db;
        }

    }
}
