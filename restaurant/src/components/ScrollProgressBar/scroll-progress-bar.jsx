import React, { useState, useEffect } from "react";
import "./scroll-progress-bar.css";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      // 1. ПОЛУЧЕНИЕ ТЕКУЩЕЙ ПОЗИЦИИ СКРОЛЛА
      // Проверка двух способов для кроссбраузерной совместимости:
      // - window.pageYOffset - современный стандарт
      // - document.documentElement.scrollTop - для старых браузеров
      // Оператор || возвращает первое истинное значение
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // 2. ВЫЧИСЛЕНИЕ ОБЩЕЙ ВЫСОТЫ ДЛЯ СКРОЛЛА
      // Полная высота скролла = (общая высота документа) - (высота видимой области)
      // document.documentElement.scrollHeight - полная высота всего документа
      // document.documentElement.clientHeight - высота видимой области браузера (viewport)
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      // 3. ПРОВЕРКА НА НУЛЕВУЮ ВЫСОТУ СКРОЛЛА
      // Если scrollHeight = 0, значит страница не требует скролла
      // (вся content помещается в одном экране)
      if (scrollHeight === 0) {
        setScrollProgress(0); // Устанавливаем прогресс 0%
        return; // Прерываем выполнение функции
      }

      // 4. ВЫЧИСЛЕНИЕ ПРОГРЕССА В ПРОЦЕНТАХ
      // Формула: (текущая позиция / максимальная позиция) * 100
      // Это дает значение от 0% до 100%
      let progress = (scrollTop / scrollHeight) * 100;

      // 5. ОГРАНИЧЕНИЕ ДИАПАЗОНА ЗНАЧЕНИЙ
      // Убеждаемся, что прогресс не превышает 100%
      // Это важно для браузеров, где scrollTop может быть чуть больше scrollHeight
      progress = Math.min(100, Math.max(0, progress));

      // 6. ОКРУГЛЕНИЕ ДЛЯ ПЛАВНОСТИ (опционально)
      // Можно добавить округление чтобы уменьшить количество ререндеров
      // progress = Math.round(progress * 10) / 10; // Округление до 0.1%

      // 7. ОБНОВЛЕНИЕ СОСТОЯНИЯ
      // Устанавливаем новое значение прогресса, что вызывает ререндер компонента
      setScrollProgress(progress);

      // 8. ДЕБАГГИНГ (можно удалить в продакшене)
      console.log(`Scroll: ${scrollTop}px / ${scrollHeight}px = ${progress}%`);
    };

    const handleEvent = () => {
      calculateScrollProgress();
    };

    // 7. ДОБАВЛЕНИЕ ОБРАБОТЧИКОВ СОБЫТИЙ
    window.addEventListener("scroll", handleEvent, { passive: true });
    window.addEventListener("resize", handleEvent, { passive: true });

    // 8. ВЫЗОВ ПРИ ПЕРВОНАЧАЛЬНОЙ ЗАГРУЗКЕ
    calculateScrollProgress();

    // 9. CLEANUP FUNCTION - УДАЛЕНИЕ ОБРАБОТЧИКОВ (ф-ция очистки)
    return () => {
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("resize", handleEvent);
    };
  }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
    </div>
  );
};

export default ScrollProgressBar;
