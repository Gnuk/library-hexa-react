async function createFor(fwk: string): Promise<() => void> {
  if (fwk === 'vue') {
    const { createVue } = await import('@/vue.ts');
    return createVue;
  }
  if (fwk === 'react') {
    const { createReact } = await import('@/react.tsx');
    return createReact;
  }
  throw new Error(`There is no way to create the framework ${fwk}`);
}

const main = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  await createFor(import.meta.env.VITE_FWK).then(create => create());
};

void main();
