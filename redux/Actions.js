export const DISPLAY_LOADER = 'DISPLAY_LOADER';
export const REFRESH = 'REFRESH';
export const COUNTER = 'COUNTER';

export function showLoader(bool) {
  return {
    type: DISPLAY_LOADER,
    data: bool,
  };
}

export function refresh() {
  return {
    type: REFRESH,
    data: true,
  };
}

export function counter(val) {
  return {
    type: COUNTER,
    data: val,
  };
}
