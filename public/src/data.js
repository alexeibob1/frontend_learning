const categories =  [
    {
        "id": 1,
        "name": "Acids"
    },
    {
        "id": 2,
        "name": "Oxids"
    },
    {
        "id": 3,
        "name": "Salts"
    },
    {
        "id": 4,
        "name": "Bases"
    },
    {
        "id": 5,
        "name": "Nature"
    },
    {
        "id": 6,
        "name": "Organic"
    },
    {
        "id": 7,
        "name": "Liquids"
    },
    {
        "id": 8,
        "name": "Metals"
    },
    {
        "id": 9,
        "name": "Nonmetals"
    },
    {
        "id": 10,
        "name": "Radioactive"
    },
    {
        "id": 11,
        "name": "Vitamins"
    },
    {
        "id": 12,
        "name": "Inorganic"
    }
];

const compounds = [
    {
        "imgPath": "serin.png",
        "description": "Serine was first obtained from silk protein, a particularly rich source, in 1865 by Emil Cramer. Its name is derived from the Latin for silk, sericum. Serine's structure was established in 1902.",
        "title": "Serine",
        "categories": [
            1, 5, 6
        ]
    },
    {
        "imgPath": "glycine.png",
        "description": "Glycine is the simplest amino acid, with the chemical formula NH2-CH2-COOH. It is a non-essential amino acid, meaning that it can be synthesized by the human body. Glycine is involved in various biochemical processes and is an important component of proteins and peptides.",
        "title": "Glycine",
        "categories": [
            6, 5
        ]
    },
    {
        "imgPath": "sodium-chloride.png",
        "description": "Sodium chloride, commonly known as table salt, is a compound composed of sodium and chlorine ions. It is widely used as a seasoning and preservative in food, as well as in various industrial processes. Sodium chloride is classified as a salt and belongs to the category of compounds known as salts.",
        "title": "Sodium Chloride",
        "categories": [
            3, 5, 12
        ]
    },
    {
        "imgPath": "citric-acid.png",
        "description": "Citric acid is a weak organic acid that occurs naturally in citrus fruits like lemons and oranges. It is widely used as an additive in food, beverages, and various household products. Citric acid is classified as an acid and falls under the category of compounds known as acids.",
        "title": "Citric Acid",
        "categories": [
            1, 5, 6
        ]
    },
    {
        "imgPath": "iron.jpg",
        "description": "Iron is a metallic element with the symbol Fe and atomic number 26. It is one of the most abundant elements on Earth and has numerous industrial applications. Iron is classified as a metal and belongs to the category of compounds known as metals.",
        "title": "Iron",
        "categories": [
            8, 12
        ]
    },
    {
        "imgPath": "oxygen.jpg",
        "description": "Oxygen is a chemical element with the symbol O and atomic number 8. It is a highly reactive gas and is essential for the survival of most organisms. Oxygen is classified as a nonmetal and falls under the category of compounds known as nonmetals.",
        "title": "Oxygen",
        "categories": [
            9, 5
        ]
    },
    {
        "imgPath": "sodium-hydroxide.png",
        "description": "Sodium hydroxide, also known as caustic soda, is a highly caustic and reactive compound. It is commonly used in industry for various applications, including soap and detergent production, water treatment, and chemical synthesis.",
        "title": "Sodium Hydroxide",
        "categories": [
            4, 12
        ]
    },
    {
        "imgPath": "water.png",
        "description": "Water is a transparent, tasteless, and odorless compound. It is essential for the survival of all known forms of life and plays a vital role in various biological and chemical processes. Water exists naturally in its liquid state on Earth.",
        "title": "Water",
        "categories": [
            7, 5, 12
        ]
    },
    {
        "imgPath": "sulfuric-acid.png",
        "description": "Sulfuric acid is a highly corrosive and strong acid with the chemical formula H2SO4. It is widely used in various industrial processes, including the production of fertilizers, dyes, detergents, and explosives. Sulfuric acid is classified as an acid and belongs to the category of compounds known as acids.",
        "title": "Sulfuric Acid",
        "categories": [
            1, 12
        ]
    },
    {
        "imgPath": "vitamin-c.png",
        "description": "Vitamin C, also known as ascorbic acid, is a water-soluble vitamin that is essential for the growth, development, and repair of body tissues. It is found in various fruits and vegetables and is known for its antioxidant properties.",
        "title": "Vitamin C",
        "categories": [
            11, 5, 6
        ]
    },
    {
        "imgPath": "vitamin-d.png",
        "description": "Vitamin D is a fat-soluble vitamin that helps regulate the absorption of calcium and phosphorus in the body. It plays a crucial role in maintaining bone health and supporting immune function. Vitamin D can be produced by the body through exposure to sunlight or obtained from certain foods and supplements.",
        "title": "Vitamin D",
        "categories": [
            11, 5, 6
        ]
    },
    {
        "imgPath": "uranium-235.jpg",
        "description": "Uranium-235 is a radioactive isotope of uranium that is used as fuel in nuclear reactors and in the production of nuclear weapons. It undergoes radioactive decay, releasing energy in the form of radiation. Due to its potential for both peaceful and destructive applications, uranium-235 is highly regulated.",
        "title": "Uranium-235",
        "categories": [
            10, 12, 8
        ]
    },
    {
        "imgPath": "plutonium-239.jpg",
        "description": "Plutonium-239 is a radioactive isotope of plutonium that is primarily used in nuclear weapons and as fuel in some types of nuclear reactors. It is produced by irradiating uranium-238 in nuclear reactors, and it undergoes radioactive decay, emitting harmful radiation.",
        "title": "Plutonium-239",
        "categories": [
            10, 12, 8
        ]
    },
    {
        "imgPath": "acetic-acid.png",
        "description": "Acetic acid is a colorless liquid that has a strong, pungent smell. It is commonly used in food preservatives, vinegar, and various industrial applications.",
        "title": "Acetic Acid",
        "categories": [
            1, 5, 6, 7
        ]
    },
    {
        "imgPath": "hydrochloric-acid.png",
        "description": "Hydrochloric acid is a highly corrosive and strong acid. It is widely used in laboratories, metal cleaning, and various chemical processes.",
        "title": "Hydrochloric Acid",
        "categories": [
            1, 12
        ]
    },
    {
        "imgPath": "nitric-acid.png",
        "description": "Nitric acid is a highly corrosive and strong acid. It is commonly used in the production of fertilizers, explosives, and various organic compounds.",
        "title": "Nitric Acid",
        "categories": [
            1, 12
        ]
    },
    {
        "imgPath": "phosphoric-acid.png",
        "description": "Phosphoric acid is a mineral acid that is commonly used in the production of fertilizers, food and beverages, and cleaning products.",
        "title": "Phosphoric Acid",
        "categories": [
            1, 12, 5
        ]
    },
    {
        "imgPath": "formic-acid.png",
        "description": "Formic acid is a colorless liquid with a pungent odor. It is found naturally in certain insects and is commonly used in the production of leather, textiles, and cleaning agents.",
        "title": "Formic Acid",
        "categories": [
            1, 5, 6, 7
        ]
    },
    {
        "imgPath": "acetylsalicylic-acid.png",
        "description": "Acetylsalicylic acid, commonly known as aspirin, is a medication used to reduce pain, fever, and inflammation. It also has blood-thinning properties and is used for cardiovascular protection.",
        "title": "Acetylsalicylic Acid",
        "categories": [
            1, 6
        ]
    },
    {
        "imgPath": "oxalic-acid.png",
        "description": "Oxalic acid is a crystalline compound that occurs naturally in various plants. It is commonly used as a reducing agent, in cleaning products, and for rust removal.",
        "title": "Oxalic Acid",
        "categories": [
            1, 6
        ]
    },
    {
        "imgPath": "lactic-acid.png",
        "description": "Lactic acid is a organic acid that is produced naturally in the body during strenuous exercise. It is also used as a food preservative and in the production of biodegradable plastics.",
        "title": "Lactic Acid",
        "categories": [
            1, 5, 6
        ]
    }
];