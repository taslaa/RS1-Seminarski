using AutoMapper;
using SeminarskiTest.Data;
using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services
{
    public class ValutaRepository : GenericRepository<Valuta, ValutaVModel, object>, IValutaRepository
    {
        private readonly AppDbContext _db;
      
        public ValutaRepository(AppDbContext db, IMapper mapper) : base(mapper, db)
        {
            _db = db;
        }
    }
}
