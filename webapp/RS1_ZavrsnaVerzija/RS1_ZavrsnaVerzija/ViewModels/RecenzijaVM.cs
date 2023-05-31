using SeminarskiTest.Models;

namespace SeminarskiTest.ViewModels
{
    public class RecenzijaVM
    {
        public int id { get; set; }
        public string nazivProizvoda { get; set; }
        public List<Recenzija> recenzije { get; set; }
        public List<Korisnik> korisnici { get; set; }
    }
}
