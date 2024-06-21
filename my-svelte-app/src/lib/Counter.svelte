<script>
	import {startCount} from '../utils/couter.js';
	import {createUpdateCounter} from '../utils/update-counter.js';

	const {updateCount, startMeasuring, stopMeasuring} = createUpdateCounter();

	const counter = startCount();

</script>

<button on:click={startMeasuring}>Измерить</button>
<button on:click={stopMeasuring}>Стоп</button>
<span>Обновлено {$updateCount} раз</span>
<span>Считаем {$counter} раз</span>

