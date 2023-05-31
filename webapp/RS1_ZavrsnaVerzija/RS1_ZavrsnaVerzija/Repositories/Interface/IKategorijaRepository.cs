using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services.Interfaces
{
    public interface IKategorijaRepository : IGenericRepository<Kategorija, KategorijaVModel, BaseSearchObject>
    {

    }
}
