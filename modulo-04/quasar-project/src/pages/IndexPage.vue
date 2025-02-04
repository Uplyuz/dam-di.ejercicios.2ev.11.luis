<template>
<q-page >
    <q-card>

        <q-card-section class="row q-gutter-md">
            <q-card style="width: 250px">
                <q-card-section class="bg-blue-6">
                    <p>Contadores</p>
                    <p>Lista de contadores</p>
                </q-card-section>
                <q-card-section style="height: 100px">
                En esta seccion muestra la lista de contadores obtenidos desde SUPABASE.
                </q-card-section>
                <q-separator></q-separator>

                <q-card-actions >
                    <q-btn to="/contadores">Acceder</q-btn>
                    <q-btn :href="'https://supabase.com/docs/guides/api'"  target="_blank">Api supabase</q-btn>

                </q-card-actions>

            </q-card>
            <q-card style="width: 250px">
                <q-card-section  class="bg-blue-6">
                    <p>Operaciones</p>
                    <p>Adminitracion</p>
                </q-card-section>
                <q-card-section style="height: 100px">
                Operaciones masivas sobre contadores.
                </q-card-section>
                <q-separator></q-separator>

                <q-card-actions align="left">
                    <q-btn to="/operaciones">Acceder</q-btn>
                </q-card-actions>

            </q-card>
        </q-card-section>
    </q-card>
</q-page>
</template>

<script setup>
</script>
