import React from 'react';

export const MissionVision = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 border border-gray-100 card-shadow">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-purplebrand-500 text-white flex items-center justify-center">M</div>
          <div>
            <div className="font-semibold text-gray-800">Misión</div>
            <div className="text-sm text-gray-600 mt-1">Entregar soluciones móviles con UX limpio y sencillo.</div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-200 to-amber-200 border-gray-100 card-shadow">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-purplebrand-700 text-white flex items-center justify-center">V</div>
          <div>
            <div className="font-semibold text-gray-800">Visión</div>
            <div className="text-sm text-gray-600 mt-1">Ser referencia en productos móviles accesibles y bien diseñados.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
