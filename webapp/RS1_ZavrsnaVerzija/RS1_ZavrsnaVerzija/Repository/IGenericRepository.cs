using SeminarskiTest.Helper;

namespace SeminarskiTest.Services.Repository
{
    public interface IGenericRepository<T, TModel, TSearch>
    {
        IEnumerable<T> Get(TSearch search);
        void Add(TModel x);
        void Update(int id, TModel z);
        void Delete(int id);
        void Delete(string id);
        PagedList<T> GetPaged(TSearch search);
    }
}
