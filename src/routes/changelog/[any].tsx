import { For, Show } from "solid-js";
import { useLocation } from "solid-app-router";

import NotFound from "../[...404]";

import { versions } from "../../../Changes";

export default function Version () {
  const location = useLocation();

  const path = location.pathname.split("/").at(-1);

  const version = versions[path];

  if (!version) {
    return <NotFound />;
  }

  return (
    <>
      <div class="text-center mb-10">
        <h1 class="text-2xl pt-10">{ `v${path}` }</h1>
        <p class="italic pb-10">{ version.date }</p>

        <Show when={ version.description }>
          <p class="text-center">{ version.description }</p>
        </Show>

        <Show when={ version.additions && version.additions.length > 0 }>
          <div class="py-5">
            <h2 class="text-xl">Additions</h2>
            <ul class="list-disc">
              <For each={ version.additions }>{(change) =>
                <li class="list-disc">&bull; { change as string }</li>
              }</For>
            </ul>
          </div>
        </Show>

        <Show when={ version.fixes && version.fixes.length > 0 }>
          <div class="py-5">
            <h2 class="text-xl">Fixes</h2>
            <ul class="list-disc">
              <For each={ version.fixes }>{(change) =>
                <li class="list-disc">&bull; { change as string }</li>
              }</For>
            </ul>
          </div>
        </Show>

        <Show when={ version.updates && version.updates.length > 0 }>
          <div class="py-5">
            <h2 class="text-xl">Updates</h2>
            <ul class="list-disc">
              <For each={ version.updates }>{(change) =>
                <li class="list-disc">&bull; { change as string }</li>
              }</For>
            </ul>
          </div>
        </Show>

        <Show when={ version.deductions && version.deductions.length > 0 }>
          <div class="py-5">
            <h2 class="text-xl">Deductions</h2>
            <ul class="list-disc">
              <For each={ version.deductions }>{(change) =>
                <li class="list-disc">&bull; { change as string }</li>
              }</For>
            </ul>
          </div>
        </Show>
      </div>
    </>
  );
}