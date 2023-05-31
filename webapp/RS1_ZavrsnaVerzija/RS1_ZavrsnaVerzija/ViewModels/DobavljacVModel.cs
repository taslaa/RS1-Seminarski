using SeminarskiTest.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeminarskiTest.ViewModels
{
    public class DobavljacVModel
    {
        public string NazivDobavljaca { get; set; }
        public int BrojDobavljaca { get; set; }
        public int? DrzavaId { get; set; }
    }
}
