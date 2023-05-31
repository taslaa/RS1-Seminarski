using MessagePack;

namespace SeminarskiTest.Models
{
    public class Lokacija
    {
        public int Id { get; set; }
        public string geoSirina { get; set; }
        public string geoVisina { get; set; }

    }
}
