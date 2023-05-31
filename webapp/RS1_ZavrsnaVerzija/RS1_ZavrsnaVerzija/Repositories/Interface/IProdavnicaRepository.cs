using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services.Interfaces
{
    public interface IProdavnicaRepository : IGenericRepository<Prodavnica, ProdavnicaVModel, ProdavnicaSearchObject>
    {

    }
}
