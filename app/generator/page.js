'use client';

import { useState } from 'react';
import BasicCard from '../../cards/BasicCard';

export default function GeneratorPage() {
  const [bride, setBride] = useState('');
  const [groom, setGroom] = useState('');

  const [brideMother, setBrideMother] = useState('');
  const [brideFather, setBrideFather] = useState('');
  const [brideGrandfather, setBrideGrandfather] = useState('');

  const [groomMother, setGroomMother] = useState('');
  const [groomFather, setGroomFather] = useState('');
  const [groomGrandfather, setGroomGrandfather] = useState('');

  const [venue, setVenue] = useState('');
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState('pastel');

  const [events, setEvents] = useState({
    kirtan: { date: '', time: '' },
    haldi: { date: '', time: '' },
    mehndi: { date: '', time: '' },
    barat: { date: '', time: '' },
    welcoming: { date: '', time: '' },
    phere: { date: '', time: '' },
    vidai: { date: '', time: '' },
  });

  const handleEventChange = (e, eventKey, field) => {
    setEvents((prev) => ({
      ...prev,
      [eventKey]: {
        ...prev[eventKey],
        [field]: e.target.value,
      },
    }));
  };

  const isFilled = bride && groom && venue;

  return (
    <main className="min-h-screen bg-[#fefcfb] px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-[#7ca982] mb-10">
        Generate Wedding Card
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Form Section */}
        <div className="lg:w-1/2 space-y-6">
          {/* Theme Selection */}
          <div>
            <label className="block mb-1 text-[#7ca982] font-medium">Select Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="border border-[#cce3d4] p-2 rounded-md w-full"
            >
              <option value="pastel">Pastel</option>
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
              <option value="floralPink">Floral Pink</option>
              <option value="floralBlue">Floral Blue</option>
              <option value="royalGold">Royal Gold</option>
              <option value="vintageRose">Vintage Rose</option>
            </select>
          </div>

          {/* Bride & Groom Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input value={bride} onChange={(e) => setBride(e.target.value)} placeholder="Bride's Name" className="w-full border border-[#cce3d4] p-3 rounded-md" />
              <input value={brideMother} onChange={(e) => setBrideMother(e.target.value)} placeholder="Bride's Mother" className="w-full border border-[#cce3d4] p-3 mt-2 rounded-md" />
              <input value={brideFather} onChange={(e) => setBrideFather(e.target.value)} placeholder="Bride's Father" className="w-full border border-[#cce3d4] p-3 mt-2 rounded-md" />
              <input value={brideGrandfather} onChange={(e) => setBrideGrandfather(e.target.value)} placeholder="Bride's Grandfather" className="w-full border border-[#cce3d4] p-3 mt-2 rounded-md" />
            </div>
            <div>
              <input value={groom} onChange={(e) => setGroom(e.target.value)} placeholder="Groom's Name" className="w-full border border-[#cce3d4] p-3 rounded-md" />
              <input value={groomMother} onChange={(e) => setGroomMother(e.target.value)} placeholder="Groom's Mother" className="w-full border border-[#cce3d4] p-3 mt-2 rounded-md" />
              <input value={groomFather} onChange={(e) => setGroomFather(e.target.value)} placeholder="Groom's Father" className="w-full border border-[#cce3d4] p-3 mt-2 rounded-md" />
              <input value={groomGrandfather} onChange={(e) => setGroomGrandfather(e.target.value)} placeholder="Groom's Grandfather" className="w-full border border-[#cce3d4] p-3 mt-2 rounded-md" />
            </div>
          </div>

          {/* Venue & Message */}
          <input value={venue} onChange={(e) => setVenue(e.target.value)} placeholder="Venue" className="w-full border border-[#cce3d4] p-3 rounded-md" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Custom Message" rows={3} className="w-full border border-[#cce3d4] p-3 rounded-md" />

          {/* Events */}
          <div>
            <h2 className="text-lg font-semibold text-[#7ca982] mb-2">Ceremony Events</h2>
            <div className="space-y-3">
              {Object.entries(events).map(([eventKey, { date, time }]) => (
                <div key={eventKey} className="grid grid-cols-3 gap-3 items-center">
                  <span className="capitalize font-medium text-[#7ca982]">{eventKey}</span>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => handleEventChange(e, eventKey, 'date')}
                    className="border border-[#cce3d4] p-2 rounded-md text-sm"
                  />
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => handleEventChange(e, eventKey, 'time')}
                    className="border border-[#cce3d4] p-2 rounded-md text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Preview */}
        <div className="lg:w-1/2">
          {isFilled ? (
            <BasicCard
              bride={bride}
              groom={groom}
              brideMother={brideMother}
              brideFather={brideFather}
              brideGrandfather={brideGrandfather}
              groomMother={groomMother}
              groomFather={groomFather}
              groomGrandfather={groomGrandfather}
              venue={venue}
              message={message}
              events={events}
              theme={theme}
            />
          ) : (
            <p className="text-center text-stone-400 mt-10 lg:mt-0">Fill the details to preview your card ✨</p>
          )}
        </div>
      </div>
    </main>
  );
}
