namespace SeminarskiTest.SearchObject
{
    public class BaseSearchObject
    {
        const int maxPageSize = 50;
        public int PageNumber { get; set; } = 1;
        public int _pageSize { get; set; }
        public int PageSize
        {
            get
            {
                return _pageSize;
            }
            set
            {
                _pageSize = (value > maxPageSize) ? maxPageSize : value;
            }
        }
    }
}
