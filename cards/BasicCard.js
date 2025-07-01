import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function BasicCard({
  bride, groom,
  brideMother, brideFather, brideGrandfather,
  groomMother, groomFather, groomGrandfather,
  venue, message, events = {}, theme = 'pastel',
}) {
  const cardRef = useRef();

  const handleDownload = async () => {
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement('a');
    link.download = 'wedding-card.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const themeClasses = {
    pastel: 'bg-[#f9f6f2] text-[#4a4a4a] border-[#ddd0c8]',
    classic: 'bg-white text-black border-gray-300',
    modern: 'bg-gradient-to-br from-white to-gray-100 text-gray-800 border-gray-200',
    floralPink: 'bg-pink-50 text-pink-900 border-pink-300',
    floralBlue: 'bg-blue-50 text-blue-900 border-blue-300',
    royalGold: 'bg-yellow-50 text-yellow-900 border-yellow-300 border-2',
    vintageRose: 'bg-rose-100 text-rose-900 border-rose-300',
  };

  const backgroundStyles = {
    floralPink: { backgroundImage: "url('/floral-pink.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' },
    floralBlue: { backgroundImage: "url('')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' },
  };

  return (
    <>
      <div
        ref={cardRef}
        className={`print-area p-8 rounded-xl shadow-lg border max-w-xl mx-auto text-center font-serif ${themeClasses[theme]}`}
        style={backgroundStyles[theme] || {}}
      >
        <h2 className="text-2xl font-semibold text-[#7ca982] mb-4">Wedding Invitation</h2>

        <div className="grid grid-cols-2 gap-6 text-left text-sm mb-6">
          <div>
            <h3 className="text-lg font-bold text-[#7ca982]">{bride}</h3>
            <p>D/o {brideFather}</p>
            <p>M/o {brideMother}</p>
            <p>G.D/o {brideGrandfather}</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#7ca982]">{groom}</h3>
            <p>S/o {groomFather}</p>
            <p>M/o {groomMother}</p>
            <p>G.S/o {groomGrandfather}</p>
          </div>
        </div>

        {message && <p className="italic text-stone-600 mb-6 px-4 text-sm">"{message}"</p>}

        <div className="mb-6">
          <p className="text-md font-semibold text-[#91b292]">Venue</p>
          <p className="text-sm text-stone-600">{venue}</p>
        </div>

        <div className="text-left text-sm mt-6">
          <p className="text-md font-semibold text-[#7ca982] mb-2">Ceremony Schedule:</p>
          <div className="grid grid-cols-3 gap-2 font-medium text-[#5c6e58]">
            <span className="underline">Event</span>
            <span className="underline">Date</span>
            <span className="underline">Time</span>
            {Object.entries(events).map(([event, { date, time }]) =>
              date || time ? (
                <React.Fragment key={event}>
                  <span className="capitalize">{event}</span>
                  <span>{date}</span>
                  <span>{time}</span>
                </React.Fragment>
              ) : null
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button onClick={handleDownload} className="bg-[#7ca982] text-white px-4 py-2 rounded-md hover:bg-[#6aa471]">
          Download Card
        </button>
        <button onClick={() => window.print()} className="bg-[#91b292] text-white px-4 py-2 rounded-md hover:bg-[#7ca982]">
          Print Card
        </button>
      </div>
    </>
  );
}
