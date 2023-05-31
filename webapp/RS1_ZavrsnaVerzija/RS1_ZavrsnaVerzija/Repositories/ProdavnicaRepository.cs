using AutoMapper;
using SeminarskiTest.Data;
using SeminarskiTest.Helper;
using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Interfaces;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services
{
    public class ProdavnicaRepository : GenericRepository<Prodavnica, ProdavnicaVModel, ProdavnicaSearchObject>, IProdavnicaRepository
    {
        private readonly AppDbContext _db;

        public ProdavnicaRepository(AppDbContext db, IMapper mapper) : base(mapper, db)
        {
            _db = db;
        }

        public override IQueryable<Prodavnica> AddQuery(IQueryable<Prodavnica> query, ProdavnicaSearchObject search)
        {
            if (!string.IsNullOrWhiteSpace(search.Naziv))
            {
                query = query.Where(x => x.Naziv.ToLower().StartsWith(search.Naziv.ToLower()));
            }

            if (search.ComboBoxSearch == "Abeceda")
            {
                query = query.OrderBy(x => x.Naziv);
            }

            if (search.ComboBoxSearch == "AbecedaUnazad")
            {
                query = query.OrderByDescending(x => x.Naziv);
            }

            return query;
        }

        public override PagedList<Prodavnica> GetPaged(IQueryable<Prodavnica> entity, ProdavnicaSearchObject search)
        {
            return PagedList<Prodavnica>.ToPagedList(entity, search.PageNumber, search.PageSize);
        }
    }
}
