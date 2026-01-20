
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace WebApi.Features.Products
{
    public class ProductHandlers
    {
        private const int TargetCount = 10000;

        // Mock in-memory
        private static readonly List<ProductModel> Products = new()
        {
            new() { Id = 1,  Name = "Laptop Pro",                   Category = "Electronics",      Price = 2499, Status = ProductStatus.InStock },
            new() { Id = 2,  Name = "Wireless Mouse",               Category = "Accessories",      Price = 49,   Status = ProductStatus.LowStock },
            new() { Id = 3,  Name = "Monitor 4K",                   Category = "Electronics",      Price = 699,  Status = ProductStatus.OutOfStock },
            new() { Id = 4,  Name = "Keyboard",                     Category = "Accessories",      Price = 149,  Status = ProductStatus.InStock },
            new() { Id = 5,  Name = "Noise Cancelling Headphones",  Category = "Audio",            Price = 199,  Status = ProductStatus.InStock },
            new() { Id = 6,  Name = "Smartphone X",                 Category = "Electronics",      Price = 1099, Status = ProductStatus.LowStock },
            new() { Id = 7,  Name = "USB-C Hub",                    Category = "Accessories",      Price = 39,   Status = ProductStatus.InStock },
            new() { Id = 8,  Name = "Gaming Chair",                 Category = "Furniture",        Price = 299,  Status = ProductStatus.OutOfStock },
            new() { Id = 9,  Name = "Mechanical Keyboard",          Category = "Accessories",      Price = 179,  Status = ProductStatus.InStock },
            new() { Id = 10, Name = "Portable SSD 1TB",             Category = "Storage",          Price = 129,  Status = ProductStatus.InStock },
            new() { Id = 11, Name = "Webcam HD",                    Category = "Accessories",      Price = 89,   Status = ProductStatus.LowStock },
            new() { Id = 12, Name = "Bluetooth Speaker",            Category = "Audio",            Price = 149,  Status = ProductStatus.InStock },
            new() { Id = 13, Name = "Fitness Tracker",              Category = "Wearables",        Price = 99,   Status = ProductStatus.InStock },
            new() { Id = 14, Name = "Drone Camera",                 Category = "Electronics",      Price = 899,  Status = ProductStatus.OutOfStock },
            new() { Id = 15, Name = "Smartwatch Pro",               Category = "Wearables",        Price = 349,  Status = ProductStatus.LowStock },
            new() { Id = 16, Name = "Action Camera 4K",             Category = "Photography",      Price = 249,  Status = ProductStatus.InStock },
            new() { Id = 17, Name = "LED Desk Lamp",                Category = "Home",             Price = 59,   Status = ProductStatus.InStock },
            new() { Id = 18, Name = "Wireless Charger",             Category = "Accessories",      Price = 35,   Status = ProductStatus.InStock },
            new() { Id = 19, Name = "VR Headset",                   Category = "Electronics",      Price = 499,  Status = ProductStatus.OutOfStock },
            new() { Id = 20, Name = "Smart Home Hub",               Category = "Home",             Price = 129,  Status = ProductStatus.LowStock },
            new() { Id = 21, Name = "E-reader",                     Category = "Electronics",      Price = 189,  Status = ProductStatus.InStock },
            new() { Id = 22, Name = "Laser Printer",                Category = "Office",           Price = 219,  Status = ProductStatus.LowStock },
            new() { Id = 23, Name = "Graphics Tablet",              Category = "Accessories",      Price = 259,  Status = ProductStatus.InStock },
            new() { Id = 24, Name = "External HDD 4TB",             Category = "Storage",          Price = 119,  Status = ProductStatus.InStock },
            new() { Id = 25, Name = "Portable Projector",           Category = "Electronics",      Price = 399,  Status = ProductStatus.OutOfStock },
            new() { Id = 26, Name = "Wi-Fi Router AX",              Category = "Networking",       Price = 169,  Status = ProductStatus.InStock },
            new() { Id = 27, Name = "NAS 2-Bay",                    Category = "Storage",          Price = 329,  Status = ProductStatus.LowStock },
            new() { Id = 28, Name = "Electric Kettle",              Category = "Home Appliances",  Price = 49,   Status = ProductStatus.InStock },
            new() { Id = 29, Name = "Air Purifier",                 Category = "Home Appliances",  Price = 229,  Status = ProductStatus.InStock },
            new() { Id = 30, Name = "Smart Bulb Pack",              Category = "Home",             Price = 79,   Status = ProductStatus.InStock },
            new() { Id = 31, Name = "Microwave Oven",               Category = "Home Appliances",  Price = 149,  Status = ProductStatus.OutOfStock },
            new() { Id = 32, Name = "Dishwasher",                   Category = "Home Appliances",  Price = 599,  Status = ProductStatus.LowStock },
            new() { Id = 33, Name = "Electric Scooter",             Category = "Mobility",         Price = 899,  Status = ProductStatus.InStock },
            new() { Id = 34, Name = "Portable Power Bank",          Category = "Accessories",      Price = 29,   Status = ProductStatus.InStock },
            new() { Id = 35, Name = "Smart Thermostat",             Category = "Home",             Price = 199,  Status = ProductStatus.LowStock },
            new() { Id = 36, Name = "HDMI Cable 2m",                Category = "Accessories",      Price = 14,   Status = ProductStatus.InStock },
        };

        // Costruttore statico: ripeti ciclicamente i 36 elementi fino a raggiungere 10.000
        static ProductHandlers()
        {
            var pattern = Products.Take(36).ToList();
            if (pattern.Count == 0)
                return;

            // Continuare da Products.Count + 1 assicura Id univoci e progressivi
            for (int i = Products.Count + 1; i <= TargetCount; i++)
            {
                var model = pattern[(i - 1) % pattern.Count];

                Products.Add(new ProductModel
                {
                    Id = i,
                    Name = model.Name,          // nome invariato
                    Category = model.Category,
                    Price = model.Price,
                    Status = model.Status
                });
            }
        }

        /// <summary>
        /// Restituisce una pagina di prodotti con totale. Parametri robusti e no overflow in Skip.
        /// </summary>

        public async Task<(IReadOnlyList<ProductModel> Items, int Total)> GetPagedAsync(
            int first,
            int size,
            CancellationToken cancellationToken = default)
        {
            // Simula latenza di 2 secondi (rispetta il cancellationToken)
            await Task.Delay(TimeSpan.FromSeconds(2), cancellationToken);

            var total = Products.Count;

            // Evita overflow nel calcolo di Skip
            if (first >= total || size == 0)
            {
                return (Array.Empty<ProductModel>(), total);
            }

            // Nota: ToList materializza la pagina corrente solo
            var items = Products
                .Skip(first)      // 'first' è già int
                .Take(size)
                .ToList();

            return (items, total);
        }
 

    }
}
