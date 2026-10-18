import { criarHandler } from './handler.js';
Deno.serve(criarHandler({ env: (nome: string) => Deno.env.get(nome), fetch }));
