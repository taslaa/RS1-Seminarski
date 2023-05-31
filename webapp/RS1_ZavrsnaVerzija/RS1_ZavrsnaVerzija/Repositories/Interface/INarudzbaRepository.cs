using SeminarskiTest.Models;
using SeminarskiTest.Services.Repository;
using SeminarskiTest.ViewModels;

namespace SeminarskiTest.Services.Interfaces
{
    public interface INarudzbaRepository : IGenericRepository<Narudzba, NarudzbaInsertRequest, object>
    {
        NarudzbaVModel Insert(NarudzbaInsertRequest request);
        List<NarudzbaVModel> GetNarudzba();
    }
}
