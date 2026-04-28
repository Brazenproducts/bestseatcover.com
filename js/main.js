document.addEventListener('DOMContentLoaded',function(){
  // Mobile nav toggle
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.main-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',nav.classList.contains('open'));
    });
  }
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      const target=document.querySelector(this.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });
  // Active nav highlighting
  const current=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.main-nav a').forEach(function(a){
    if(a.getAttribute('href')===current)a.classList.add('active');
  });
});

/* ═══════════════════════════════════════════════
   MOBILE UX OVERHAUL — JS Module
   Accordion cards, sticky nav, collapsible sections,
   FAQ toggle, vehicle finder
   ═══════════════════════════════════════════════ */
(function() {
  'use strict';

  // ── 1. Accordion Review Detail Toggle ──
  document.querySelectorAll('.review-detail-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var body = this.nextElementSibling;
      if (!body) return;
      var isCollapsed = body.classList.contains('collapsed');
      if (isCollapsed) {
        body.style.maxHeight = body.scrollHeight + 'px';
        body.classList.remove('collapsed');
        this.classList.add('expanded');
        this.textContent = 'Hide details';
      } else {
        body.style.maxHeight = '0';
        body.classList.add('collapsed');
        this.classList.remove('expanded');
        this.textContent = 'Read full review';
      }
    });
  });

  // ── 2. Collapsible Sections (buying guide, "what to look for") ──
  document.querySelectorAll('.collapsible-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var body = this.nextElementSibling;
      if (!body || !body.classList.contains('collapsible-body')) return;
      var isCollapsed = body.classList.contains('collapsed');
      if (isCollapsed) {
        body.style.maxHeight = body.scrollHeight + 'px';
        body.classList.remove('collapsed');
        this.classList.add('expanded');
      } else {
        body.style.maxHeight = '0';
        body.classList.add('collapsed');
        this.classList.remove('expanded');
      }
    });
  });

  // ── 3. FAQ Accordion ──
  document.querySelectorAll('.faq-question').forEach(function(q) {
    q.addEventListener('click', function() {
      var body = this.nextElementSibling;
      if (!body) return;
      var isCollapsed = body.classList.contains('collapsed');
      if (isCollapsed) {
        body.style.maxHeight = body.scrollHeight + 'px';
        body.classList.remove('collapsed');
        this.classList.add('expanded');
      } else {
        body.style.maxHeight = '0';
        body.classList.add('collapsed');
        this.classList.remove('expanded');
      }
    });
  });

  // ── 4. Vehicle Finder (seat cover sites only) ──
  var vfMake = document.getElementById('vf-make');
  var vfModel = document.getElementById('vf-model');
  var vfYear = document.getElementById('vf-year');
  var vfBtn = document.getElementById('vf-go');

  if (vfMake && vfModel && vfYear && vfBtn) {
    var vehicleData = {
      'Jeep': {
        'Wrangler TJ': { years: '1997-2006', page: 'best-jeep-seat-covers.html' },
        'Wrangler JK': { years: '2007-2010', page: 'best-jeep-seat-covers.html' },
        'Wrangler JKU': { years: '2007-2018', page: 'best-jeep-seat-covers.html' },
        'Wrangler JL': { years: '2018-2026', page: 'best-jeep-seat-covers.html' },
        'Wrangler JLU': { years: '2018-2026', page: 'best-jeep-seat-covers.html' },
        'Gladiator': { years: '2020-2026', page: 'best-jeep-gladiator-seat-covers.html' },
        'Cherokee': { years: '2014-2023', amazonQuery: 'Jeep Cherokee seat covers' },
        'Grand Cherokee': { years: '2011-2026', amazonQuery: 'Jeep Grand Cherokee seat covers' },
        'Compass': { years: '2017-2026', amazonQuery: 'Jeep Compass seat covers' },
        'Renegade': { years: '2015-2026', amazonQuery: 'Jeep Renegade seat covers' }
      },
      'Toyota': {
        'Tacoma (2nd Gen)': { years: '2005-2015', page: 'best-toyota-tacoma-seat-covers.html' },
        'Tacoma (3rd Gen)': { years: '2016-2023', page: 'best-toyota-tacoma-seat-covers.html' },
        'Tacoma (4th Gen)': { years: '2024-2026', page: 'best-toyota-tacoma-seat-covers.html' },
        '4Runner': { years: '2010-2026', page: 'best-toyota-4runner-seat-covers.html' },
        'Tundra': { years: '2007-2026', page: 'best-toyota-tundra-seat-covers.html' },
        'Land Cruiser': { years: '1998-2026', amazonQuery: 'Toyota Land Cruiser seat covers' },
        'Sequoia': { years: '2008-2026', amazonQuery: 'Toyota Sequoia seat covers' },
        'RAV4': { years: '2013-2026', amazonQuery: 'Toyota RAV4 seat covers' },
        'Highlander': { years: '2008-2026', amazonQuery: 'Toyota Highlander seat covers' }
      },
      'Ford': {
        'Bronco': { years: '2021-2026', page: 'best-ford-bronco-seat-covers.html' },
        'Bronco Sport': { years: '2021-2026', amazonQuery: 'Ford Bronco Sport seat covers' },
        'F-150': { years: '2009-2026', page: 'best-ford-f150-seat-covers.html' },
        'F-250 Super Duty': { years: '2011-2026', amazonQuery: 'Ford F-250 Super Duty seat covers' },
        'F-350 Super Duty': { years: '2011-2026', amazonQuery: 'Ford F-350 Super Duty seat covers' },
        'Ranger': { years: '2019-2026', page: 'best-ford-ranger-seat-covers.html' },
        'Maverick': { years: '2022-2026', amazonQuery: 'Ford Maverick seat covers' },
        'Explorer': { years: '2011-2026', amazonQuery: 'Ford Explorer seat covers' },
        'Expedition': { years: '2007-2026', amazonQuery: 'Ford Expedition seat covers' },
        'Mustang': { years: '2005-2026', amazonQuery: 'Ford Mustang seat covers' }
      },
      'Chevrolet': {
        'Silverado 1500': { years: '2007-2026', page: 'best-chevy-silverado-seat-covers.html' },
        'Silverado 2500HD': { years: '2007-2026', amazonQuery: 'Chevrolet Silverado 2500HD seat covers' },
        'Silverado 3500HD': { years: '2007-2026', amazonQuery: 'Chevrolet Silverado 3500HD seat covers' },
        'Colorado': { years: '2015-2026', page: 'best-chevy-colorado-seat-covers.html' },
        'Tahoe': { years: '2007-2026', amazonQuery: 'Chevrolet Tahoe seat covers' },
        'Suburban': { years: '2007-2026', amazonQuery: 'Chevrolet Suburban seat covers' },
        'Trailblazer': { years: '2021-2026', amazonQuery: 'Chevrolet Trailblazer seat covers' },
        'Equinox': { years: '2010-2026', amazonQuery: 'Chevrolet Equinox seat covers' },
        'Camaro': { years: '2010-2024', amazonQuery: 'Chevrolet Camaro seat covers' },
        'Corvette': { years: '2014-2026', amazonQuery: 'Chevrolet Corvette seat covers' }
      },
      'GMC': {
        'Sierra 1500': { years: '2007-2026', amazonQuery: 'GMC Sierra 1500 seat covers' },
        'Sierra 2500HD': { years: '2007-2026', amazonQuery: 'GMC Sierra 2500HD seat covers' },
        'Sierra 3500HD': { years: '2007-2026', amazonQuery: 'GMC Sierra 3500HD seat covers' },
        'Canyon': { years: '2015-2026', amazonQuery: 'GMC Canyon seat covers' },
        'Yukon': { years: '2007-2026', amazonQuery: 'GMC Yukon seat covers' },
        'Yukon XL': { years: '2007-2026', amazonQuery: 'GMC Yukon XL seat covers' },
        'Acadia': { years: '2007-2026', amazonQuery: 'GMC Acadia seat covers' },
        'Hummer EV': { years: '2022-2026', amazonQuery: 'GMC Hummer EV seat covers' }
      },
      'Ram': {
        '1500': { years: '2009-2026', page: 'best-ram-1500-seat-covers.html' },
        '2500': { years: '2010-2026', amazonQuery: 'Ram 2500 seat covers' },
        '3500': { years: '2010-2026', amazonQuery: 'Ram 3500 seat covers' },
        'TRX': { years: '2021-2024', amazonQuery: 'Ram TRX seat covers' }
      },
      'Dodge': {
        'Durango': { years: '2011-2026', amazonQuery: 'Dodge Durango seat covers' },
        'Charger': { years: '2011-2024', amazonQuery: 'Dodge Charger seat covers' },
        'Challenger': { years: '2008-2024', amazonQuery: 'Dodge Challenger seat covers' }
      },
      'Nissan': {
        'Frontier': { years: '2005-2026', amazonQuery: 'Nissan Frontier seat covers' },
        'Titan': { years: '2004-2024', amazonQuery: 'Nissan Titan seat covers' },
        'Titan XD': { years: '2016-2024', amazonQuery: 'Nissan Titan XD seat covers' },
        'Pathfinder': { years: '2013-2026', amazonQuery: 'Nissan Pathfinder seat covers' },
        'Armada': { years: '2017-2026', amazonQuery: 'Nissan Armada seat covers' },
        'Rogue': { years: '2014-2026', amazonQuery: 'Nissan Rogue seat covers' },
        'Murano': { years: '2015-2026', amazonQuery: 'Nissan Murano seat covers' }
      },
      'Honda': {
        'Ridgeline': { years: '2017-2026', amazonQuery: 'Honda Ridgeline seat covers' },
        'Pilot': { years: '2009-2026', amazonQuery: 'Honda Pilot seat covers' },
        'Passport': { years: '2019-2026', amazonQuery: 'Honda Passport seat covers' },
        'CR-V': { years: '2012-2026', amazonQuery: 'Honda CR-V seat covers' },
        'Odyssey': { years: '2011-2026', amazonQuery: 'Honda Odyssey seat covers' }
      },
      'Subaru': {
        'Outback': { years: '2010-2026', amazonQuery: 'Subaru Outback seat covers' },
        'Forester': { years: '2014-2026', amazonQuery: 'Subaru Forester seat covers' },
        'Crosstrek': { years: '2013-2026', amazonQuery: 'Subaru Crosstrek seat covers' },
        'Ascent': { years: '2019-2026', amazonQuery: 'Subaru Ascent seat covers' },
        'Wilderness': { years: '2022-2026', amazonQuery: 'Subaru Wilderness seat covers' }
      },
      'Tesla': {
        'Model 3': { years: '2017-2026', amazonQuery: 'Tesla Model 3 seat covers' },
        'Model Y': { years: '2020-2026', amazonQuery: 'Tesla Model Y seat covers' },
        'Model S': { years: '2012-2026', amazonQuery: 'Tesla Model S seat covers' },
        'Model X': { years: '2015-2026', amazonQuery: 'Tesla Model X seat covers' },
        'Cybertruck': { years: '2024-2026', amazonQuery: 'Tesla Cybertruck seat covers' }
      },
      'Rivian': {
        'R1T': { years: '2022-2026', amazonQuery: 'Rivian R1T seat covers' },
        'R1S': { years: '2022-2026', amazonQuery: 'Rivian R1S seat covers' }
      }
    };
    var AMAZON_TAG = 'brazenprodu01-20';

    // Check for tacomaseats.com-specific pages
    var isTacoma = window.location.hostname.indexOf('tacomaseats') !== -1;
    if (isTacoma) {
      vehicleData['Toyota']['Tacoma (2nd Gen)'].page = 'best-tacoma-seat-covers.html';
      vehicleData['Toyota']['Tacoma (3rd Gen)'].page = 'best-tacoma-seat-covers.html';
      vehicleData['Toyota']['4Runner'].page = 'best-tacoma-seat-covers.html';
    }

    function populateModels() {
      var make = vfMake.value;
      vfModel.innerHTML = '<option value="">Select Model</option>';
      vfYear.innerHTML = '<option value="">Select Year</option>';
      if (make && vehicleData[make]) {
        Object.keys(vehicleData[make]).forEach(function(model) {
          var opt = document.createElement('option');
          opt.value = model;
          opt.textContent = model;
          vfModel.appendChild(opt);
        });
      }
    }

    function populateYears() {
      var make = vfMake.value;
      var model = vfModel.value;
      vfYear.innerHTML = '<option value="">Select Year</option>';
      if (make && model && vehicleData[make] && vehicleData[make][model]) {
        var range = vehicleData[make][model].years.split('-');
        var start = parseInt(range[0]);
        var end = parseInt(range[1]);
        for (var y = end; y >= start; y--) {
          var opt = document.createElement('option');
          opt.value = y;
          opt.textContent = y;
          vfYear.appendChild(opt);
        }
      }
    }

    vfMake.addEventListener('change', populateModels);
    vfModel.addEventListener('change', populateYears);
    vfBtn.addEventListener('click', function() {
      var make = vfMake.value;
      var model = vfModel.value;
      if (make && model && vehicleData[make] && vehicleData[make][model]) {
        var v = vehicleData[make][model];
        if (v.page) {
          window.location.href = v.page;
        } else if (v.amazonQuery) {
          window.location.href = 'https://www.amazon.com/s?k=' + encodeURIComponent(v.amazonQuery) + '&tag=' + AMAZON_TAG;
        }
      } else if (make) {
        // Open Amazon search for the make if no model selected
        window.location.href = 'https://www.amazon.com/s?k=' + encodeURIComponent(make + ' seat covers') + '&tag=' + AMAZON_TAG;
      }
    });
  }

  // ── 5. Initialize collapsed states on mobile ──
  function initMobileCollapse() {
    if (window.innerWidth > 768) return;
    document.querySelectorAll('.collapsible-body').forEach(function(body) {
      body.classList.add('collapsed');
      body.style.maxHeight = '0';
    });
    document.querySelectorAll('.review-detail-body').forEach(function(body) {
      body.classList.add('collapsed');
      body.style.maxHeight = '0';
    });
    document.querySelectorAll('.faq-toggle-body').forEach(function(body) {
      body.classList.add('collapsed');
      body.style.maxHeight = '0';
    });
  }
  initMobileCollapse();
})();
