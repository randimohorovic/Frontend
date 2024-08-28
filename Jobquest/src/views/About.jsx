import React from "react";

export default function About() {
  return (
    <main className="p-4 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">O nama</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Naša Misija</h2>
        <p className="text-lg">
          Dobrodošli na Jobquest! Naša misija je da povežemo poslodavce i
          kandidate na najbolji mogući način. Kroz našu platformu želimo
          omogućiti jednostavan i efikasan proces zapošljavanja, gde svaki
          kandidat može pronaći prilike koje odgovaraju njihovim veštinama i
          interesovanjima, dok poslodavci mogu pronaći najbolje talente za svoje
          timove.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Naš Tim</h2>
        <p className="text-lg">
          Naš tim čine iskusni profesionalci u oblasti ljudskih resursa,
          tehnologije i dizajna. Radimo zajedno kako bismo pružili najbolja
          rešenja za naše korisnike i neprekidno unapređivali našu platformu.
        </p>
        <div className="mt-4">
          <ul className="list-disc list-inside">
            <li>
              <strong>Randi Mohorović</strong> Osnivač i CEO
            </li>
            <li>
              <strong>Obrazovanje:</strong> Fakultet informatike u Puli
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Kontaktirajte Nas</h2>
        <p className="text-lg">
          Ako imate bilo kakvih pitanja ili sugestija, slobodno nas
          kontaktirajte na:
        </p>
        <ul className="mt-4">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@jobquest.com" className="text-blue-600">
              support@jobquest.com
            </a>
          </li>
          <li>
            <strong>Telefon:</strong> +385 996599353
          </li>
        </ul>
      </section>
    </main>
  );
}
