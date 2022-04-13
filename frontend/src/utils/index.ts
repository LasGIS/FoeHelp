/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

export const compareAlphabetically = (a?: string, b?: string) => {
  const aText = a || '';
  const bText = b || '';
  if (aText < bText) return -1;
  if (aText > bText) return 1;
  return 0;
};

export const compareNumber = (a?: number, b?: number) => {
  const aNum = a || 0;
  const bNum = b || 0;
  if (aNum < bNum) return -1;
  if (aNum > bNum) return 1;
  return 0;
};

export const downloadToFile = (object: any, fileName: string, contentType: string, before?: string, after?: string) => {
  const a = document.createElement('a');
  const context: string = (before ? before : '') + JSON.stringify(object) + (after ? after : '');
  const file = new Blob([context], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
};
