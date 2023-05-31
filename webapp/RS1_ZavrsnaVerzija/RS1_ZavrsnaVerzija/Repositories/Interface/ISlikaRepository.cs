using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services.Interfaces
{
    public interface ISlikaRepository : IGenericRepository<Slika, SlikaVModel, BaseSearchObject>
    {
    }
}
