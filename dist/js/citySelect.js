const citiesByProvince = {
    tehran: ["تهران", "شهریار", "ورامین"],
    khorasan: ["مشهد", "نیشابور", "سبزوار"],
    fars: ["شیراز", "مرودشت", "کازرون"]
  };

  function populateCities() {
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("city");

    // فعال کردن فیلد شهر
    citySelect.disabled = false;

    // حذف گزینه‌های قبلی
    citySelect.innerHTML = '<option value="">انتخاب کنید...</option>';

    // افزودن شهرهای استان انتخاب شده
    const selectedProvince = provinceSelect.value;
    const cities = citiesByProvince[selectedProvince];

    cities.forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }