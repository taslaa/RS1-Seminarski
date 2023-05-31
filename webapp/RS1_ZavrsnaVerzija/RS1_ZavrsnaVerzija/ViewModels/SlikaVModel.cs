using SeminarskiTest.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace SeminarskiTest.ViewModels
{
    public class SlikaVModel
    {
        public string SlikaSlika { get; set; }
        public string Opis { get; set; }
        public int? prodavnicaId { get; set; }
    }
}
