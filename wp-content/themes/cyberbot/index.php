<?php get_header(); ?>

	<div class="zygzak1">
	</div>

	<div class="main-banner"  id="section0">
	</div>

	<div class="logo-okregi">
	</div>

	<div class="karuzela">
		<?php getLogotypy(); ?>
	</div>

	<div class="zebatki-wrapper">
		<div class="container zebatki-helper"></div>
		<div class="zebatki-content"></div>
	</div>

	<div class="o-festiwalu" id="section1">
		<div class="container">
			<?php getOFestiwalu(); ?>
		</div>
	</div>

	<div class="zebatki-o-festiwalu-1">
	</div>

	<div class="zebatki-o-festiwalu-2">
	</div>

	<div class="konkurencje" id="section2">
		<div class="container">
			<?php getKonkurencje(); ?>
		</div>
		<div class="fala-konkurencje"></div>
		<div class="container">
			<div class="row top-konkurencje">
				<div class="col-md-4 col-sm-4">
					<div class="konkurencja sumo">
						<?php getSumoMini(); ?>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="konkurencja minisumo">
						<?php getMinisumoMini(); ?>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="konkurencja nanosumo">
						<?php getNanosumoMini(); ?>
					</div>
				</div>
			</div>
			<div class="row mid-konkurencje">
				<div class="col-md-4 col-sm-4">
					<div class="konkurencja lf">
						<?php getLFMini(); ?>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="konkurencja lfe">
						<?php getLFEMini(); ?>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="konkurencja mm">
						<?php getMMMini(); ?>
					</div>
				</div>
			</div>
			<div class="row bottom-konkurencje">
				<div class="col-md-4 col-sm-4">
					<div class="konkurencja freestyle">
						<?php getFreestyleMini(); ?>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="konkurencja pc">
						<?php getPCMini(); ?>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="konkurencja mi">
						<?php getMIMini(); ?>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<img src="wp-content/themes/cyberbot/img/robot.png" id="robot">
		</div>
	</div>

	<div class="kontakt" id="section3">
		<div class="container">
			<?php getKontakt(); ?>
		</div>
		<div id="googleMap">
		</div>

<?php get_footer(); ?>
