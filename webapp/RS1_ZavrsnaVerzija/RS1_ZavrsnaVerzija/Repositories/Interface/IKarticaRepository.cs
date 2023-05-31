using SeminarskiTest.Models;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services.Interfaces
{
    public interface IKarticaRepository : IGenericRepository<Kartica, KarticaVModel, object>
    {
     
    }
}
