export default function Hackathons() {
  const hackathons = [
    {
      title: "AI-Powered App Challenge",
      description: "Build an app that leverages AI to solve a real-world problem.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAV4sAI3MkQPch7__7qGIsglwzFYls_uPhjLpW8CIUci0guBF2pPziz1FzVcep6zsTca_6rurzWbeHlDh7LJ1MAYgLWZ06BVDfngUj0EQa05Fkh0fUGyrhYDAkJwul5WOcMA8dwUfDWSMgeyF2ri6f51MXLsmuXtKqjNECXFJ1VdfzBSUWSiL2sNYvdEnmTlAnI6kOYV-OKgmXPVPYC1IsivvixqgWo_7IuX2OY0hgz_U5dAT_O_zVFvjVeih0xuYNrj-lK226T-Q",
    },
    {
      title: "Web3 Innovation Sprint",
      description:
        "Explore the potential of Web3 technologies and create decentralized applications.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBZCxWfRFAFXvXSIN7ZiGMEDL3djQqQcvpkrfXSPR07NeeKazN3cgKIPVJdG9L_qem1MWXwGBUcVKg8a2JN7vXFSL2mDMjOonFqzGlJMlu4ZMaF2L2wqf60XD02Bi8RhUOj06Z0xw6gRGPJIiqBKNUyJ9rtz5HvYRtbj6oh0LIkdKIBMg75mRncdv2y9HnzxgUPFdT-7rZASt8xsSeJAVPpkvJFNFwKynaq2IDZBRG2ZYG5v0CuJjdzTjpYR8TGb9XPLcf3tQHHlQ",
    },
    {
      title: "Data Science Discovery",
      description:
        "Dive into data science and uncover insights from complex datasets.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAiOONRoMM8Ct_F3A44sfcwYTMhkJsHAJEfK2J7FgJvhDFYIRhPZcMOU1WrgfNPV8vvTUs9sYUXPN4xgl76cOtnGE2rex6Ff5ZR6Me3Q-fIowNwAEG4AwhIBbdANVAmLjvqzCmEcUHSx8crLMaaEMlpV6W9ihRsscOD8sFCcad1M0QFP-2t-SLnPB1MW5dRwG3a6mIkR9we7s_geoKS73s2LhRuXxtpMfMGO2RHtg0-wPGDvDwTJAdshQeMYSawgSuXDHOJSEXatw",
    },
  ];

  const sponsors = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDNdpUqVGjSNDjC9EbEoWGCF_RCTnq3fOcx8RKm2hkMyTb9gLNQFLNc-PbCkLoIAi-qA5vsECLz6tQpRhhOeLIoBDP_ziTBioru4E71no7g_xF2IijlYG5aTI9Hch7lOVcl2B996sIZ_6nz23RIA0CQskYGiR5RXbcPyEIP2jF8ykG52mz1FYphE88WRoOrCOOET_ze9Z0NrPcq39yrrzMzDvnq6iEyc5NVCmcVDFfz0l6VxzUdoLlKoWXy_0zLI0kGbp3T6G6qmQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBtXSK_af2aDsmTYTsNA1lp09SFRy8lTHvfJWTT-VJdD565raxqfcZMwz-ivY51p3zVuNIWcu9gTCYHrTVuLtNC1f2B3BzITpRX5s3t01f-UEQZNLkjQ_s90kI3tHylj-GvAK5NqGQOPn_8TqeGtaknvVRyHygQYC8R8ScXlvT0Sd09BeYzTVVmJLMDg2537D70z6O3PiQ9VJO3SYalGKilq1XhVKgwWe1wM5X6mfv077vVedS-e7EL_fo92y7fmAMwQHXeDc_Tkg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCiHqqka8HoQ6VLeJH7R-a-6t7eZOcGz49FxpA0P6hvxAfPhZNLib-xr62qELPwSZXYkviX0D-ymTM8tGTXSfs9cO8IaiRp1rIH_mZa8Xkl1I5sjosQRx8PAdx3H7ghjYmnbZg60TCDtiVrIfz2Ofmg8rPWINjvnKjm-tm2HnyaiTd4qy6pSC3fuUROYX3eh5EisrCYegmO4BMUfDQZYl2RmwLfrnOE3R3PpE2Ec-sLUYZyX0UWFCu_LE-JXHDDuDw1qlTjDFQXOg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDelfbe0AOSJ-K590cn8i6MANpVpAnkaCmQBx6VXw-vUejZh6OMfPw5fW7KujrFiBNjNBRbY3m0E-77q48i3xCavuRvPqLCPMctRfvij0ev9dVWX6f0aF0ZbShTlOSG-WQqmOCTF34EHNeDFBHEwGnbJGo6IjYsYejFUEYdEJPJxlqR3G6r6c4lOPKFqGf2Qmf5H7-OuIxR5-JgBV_FOgDJ-6aPBZyWwnBnCd8KR5LUSYs3iN-SEpU_6qcBo8XRBq2C3Ehzz8N_gg",
  ];

  return (
    <main className="px-20 py-12 flex-1 bg-[#0D0D1A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold tracking-tighter">Hackathons</h1>
          <p className="text-gray-400 text-lg mt-2">
            Join a hackathon and build something amazing with a team of other
            developers.
          </p>
        </div>

        {/* Hackathons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Active &amp; Upcoming
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((hack, idx) => (
              <div
                key={idx}
                className="bg-[#1A1A2E] rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className="w-full h-48 bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${hack.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{hack.title}</h3>
                  <p className="text-gray-400 text-sm">{hack.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="bg-[#1A1A2E] p-6 rounded-2xl flex justify-center items-center h-32 shadow-md hover:shadow-indigo-500/20 transition-shadow"
              >
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${sponsor})` }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Spotlight Section */}
        <section className="bg-[#1A1A2E] rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div
              className="w-full aspect-video bg-cover bg-center rounded-xl"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB73ColztgKZxSv1h69LQuP9KWq1kAHG0HRN56ASQqmjytvXjDszEaKTzdtrR-l211pJ6WqmRAaH7tEhWm-VMVR6N3b8wHjZXvGCI7NGnLD8A23Yz-1aK6lEbFMbj_7l3KZTDDn7ai1S1hCrybN4e7oM7lwdtoDWOR8CdcgmJ_7yYhiCXaRRYjwRl9pgPKgiU-6V_eSeLmOjipvpKrheEwAkzoNoONryZgswu5cN_uPMXger3p-pROsOzoJ7Id-pmgB75gA4aZeMQ')",
              }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                AI-Powered App Challenge
              </h2>
              <p className="text-gray-400 mt-2">
                Build an app that leverages AI to solve a real-world problem.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-300 mb-3">Starts in:</p>
              <div className="flex gap-4 text-center">
                {["02 Days", "14 Hours", "30 Minutes", "00 Seconds"].map(
                  (time, idx) => {
                    const [num, label] = time.split(" ");
                    return (
                      <div
                        key={idx}
                        className="bg-[#0D0D1A] p-4 rounded-lg w-24"
                      >
                        <p className="text-4xl font-bold tracking-tighter">
                          {num}
                        </p>
                        <p className="text-xs text-gray-400 uppercase">
                          {label}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center rounded-full h-12 px-8 bg-[var(--royal-indigo)] text-white text-base font-semibold shadow-lg hover:bg-indigo-500 transition-all duration-300">
                Join a Team
              </button>
              <button className="flex-1 flex items-center justify-center rounded-full h-12 px-8 bg-[#2A2A3F] text-white text-base font-semibold hover:bg-[#3c3c5a] transition-colors duration-300">
                Create a Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}