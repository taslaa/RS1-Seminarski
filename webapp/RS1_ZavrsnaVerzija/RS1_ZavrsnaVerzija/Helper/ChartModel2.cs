namespace SeminarskiTest.Helper
{
    public class ChartModel2
    {
        public List<int> Data { get; set; }
        public string? Label { get; set; }
        public string? BackgroundColor { get; set; }
        public ChartModel2()
        {
            Data = new List<int>();
        }
    }
}
