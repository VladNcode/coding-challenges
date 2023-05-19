class TimeLimitedCache {
  cache = new Map();

  set(key, value, duration) {
    const exists = this.cache.get(key);
    if (exists) clearTimeout(exists.timeout);
    
    const timeout = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timeout });

    return !!exists;
  }

  get(key) {
    const exists = this.cache.get(key);
    if (exists) return exists.value;
    return -1;
  }

  count() {
    return this.cache.size;
  }
}
