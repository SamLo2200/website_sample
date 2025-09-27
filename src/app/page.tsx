import Image from "next/image";

import {
  HotBrand,
  allBrands,
  GroupedBrands,
  BrandItem,
  hotBrands,
} from "../MockData";
import Link from "next/link";

const groupBrands = (brands: BrandItem[]): GroupedBrands => {
  // Sort
  const sortedBrands = brands.sort((brandA, brandB) =>
    brandA.name.localeCompare(brandB.name)
  );

  // Grouping items by their first letter
  return sortedBrands.reduce((groups, brand) => {
    const firstLetter = brand.name[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(brand);
    return groups;
  }, {} as GroupedBrands);
};

export default function Home() {
  const groupedBrands = groupBrands(allBrands);

  return (
    <div className="max-w-[1440px] mx-auto">
      <main className="px-4 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center">
            {/* Page Title */}

            <h1 className="text-brand-gold font-bold text-3xl">All Brands</h1>

            {/* Fancy horizontal line svg */}
            <div className="max-w-[249px] my-3">
              <Image
                src="fancy_hr.svg"
                alt="Fancy Horizontal Line"
                width={800}
                height={600}
              />
            </div>
          </div>

          {/* Render hot brand logos */}
          <section>
            <div>
              <h2 className="text-2xl text-brand-gold mb-4">Hot Brands</h2>
              <hr className="text-gray-200"></hr>

              <div className="flex flex-wrap flex-row py-7">
                {hotBrands.map((brand: HotBrand) => (
                  <div
                    key={brand.name}
                    className="w-40 h-18 flex items-center justify-center m-4"
                  >
                    <Link href={brand.url}>
                      <Image
                        src={brand.logoUrl}
                        width={480}
                        height={216}
                        alt={`${brand.name} Logo`}
                        className="max-h-full"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* All brands list */}
          <section>
            <div>
              <h2 className="text-2xl text-brand-gold mb-4">All Brands</h2>
              <hr className="text-gray-200"></hr>

              {/* Crate alphabetized groups */}

              <div className="grid grid-cols-1 gap-y-11 py-7">
                {Object.entries(groupedBrands).map(([letter, brands]) => (
                  <div key={letter}>
                    <h3 className="text-2xl mb-2 text-brand-gold">{letter}</h3>

                    {/* Render brands list*/}
                    <div className="flex flex-wrap gap-x-10 gap-y-2">
                      {brands.map((brand: BrandItem) => (
                        <a
                          href={brand.url}
                          key={brand.name}
                          className="text-base text-gray-700 hover:text-black py-1"
                        >
                          {brand.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
