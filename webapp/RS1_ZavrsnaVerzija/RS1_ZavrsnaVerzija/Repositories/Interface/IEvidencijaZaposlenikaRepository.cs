using SeminarskiTest.Models;
using SeminarskiTest.SearchObject;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services.Interfaces
{
    public interface IEvidencijaZaposlenikaRepository : IGenericRepository<EvidencijaZaposlenika, EvidencijaZaposlenikaVModel, BaseSearchObject>
    {

    }
}
